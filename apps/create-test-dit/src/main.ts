import { program } from "commander";
import ctx from "./app/ctx";
import bind from "./app/bind";
import { DER } from "asn1-ts/dist/node/functional";
import createCountries from "./app/create-countries";
import createAdmin from "./app/create-admin";
import { seedGB } from "./app/create-gb";
import { adminDN } from "./app/constants";
import {
    DistinguishedName,
} from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";
import {
    AttributeTypeAndValue,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeTypeAndValue.ta";
import {
    countryName,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/countryName.oa";
import { _encodePrintableString } from "asn1-ts/dist/node/functional";
program.version("1.0.0");

program
  .requiredOption("--accessPoint <ap>", "The access point URL")
  .requiredOption("--profile <prof>", "The profile of the seed to use.")
  .option("-t|--tolerateUnknownProfile", "Whether to return a failing return code if the profile is unknown")
  ;

program.parse(process.argv);
const options = program.opts();

async function main () {
    switch (options["profile"]) {
        case ("root"): {
            const connection = await bind(ctx, options["accessPoint"], [], undefined);
            const { password: adminPassword } = await createAdmin(ctx, connection);
            await connection.close();
            ctx.log.info(`Created global directory administrator cn=admin with password '${adminPassword}'.`);
            const adminConnection = await bind(ctx, options["accessPoint"], adminDN, adminPassword);
            await createCountries(ctx, adminConnection);
            await adminConnection.close();
            break;
        }
        case ("gb"): {
            const bindDN: DistinguishedName = [
                [
                    new AttributeTypeAndValue(
                        countryName["&id"],
                        _encodePrintableString("GB", DER),
                    ),
                ],
            ];
            const password: string = "password4GB";
            const connection = await bind(ctx, options["accessPoint"], bindDN, password);
            await seedGB(ctx, connection);
            await connection.close();
            break;
        }
        default: {
            ctx.log.error(`Profile ${options["profile"]} not understood.`);
            if (options["tolerateUnknownProfile"]) {
                process.exit(0);
            } else {
                process.exit(1);
            }
        }
    }
}

main();
