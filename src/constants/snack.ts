import { makeVar } from "@apollo/client";
import { SnackMessage } from "../intefaces/snack-message.interface.ts";

export const snackVar = makeVar<SnackMessage | undefined>(undefined);
