import type { Context } from "../types";
import type { CommandModule } from "yargs";
import bind from "../net/bind";
import addEntry from "../commands/dap/add/country";

export
function create (ctx: Context): CommandModule {
    return {
        command: "country <object> <countryName>",
        describe: "Add a country",
        builder: (y) => {
            return y
                .positional("object", {
                    type: "string",
                    description: "The object",
                })
                .positional("countryName", {
                    type: "string",
                    description: "The ISO-3166 2-letter country code",
                })
                .option("description", {
                    type: "string",
                    description: "An arbitrary description",
                })
                .array("description")
                .demandOption("countryName")
                .help()
                .strict()
                ;
        },
        handler: async (argv) => {
            const connection = await bind(ctx, argv);
            await addEntry(ctx, connection, argv);
            await connection.close();
        },
    };
}

export default create;
