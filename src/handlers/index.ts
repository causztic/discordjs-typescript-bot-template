import handleSample from "./sample";

import { CommandInteraction } from "discord.js";

declare type InteractionConsumer = (
  interaction: CommandInteraction
) => Promise<void>

const COMMAND_MAP: { [key: string]: InteractionConsumer } = {
  sample: handleSample
}

export const handleCommandByName = (name: string) => {
  if (Object.keys(COMMAND_MAP).includes(name)) {
    return COMMAND_MAP[name];
  }
}
