import { CommandInteraction } from "discord.js";

const handleSample = async (
  interaction: CommandInteraction
) => {
  await interaction.reply({ content: 'Handling the sample slash command!', ephemeral: true });
}

export default handleSample;
