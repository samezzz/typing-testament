// import typeSoft from "@/assets/sound/typeSoft.wav";
// import keyboard from "@/assets/sound/keyboard.wav";
// import cherryBlue from "@/assets/sound/cherryBlue.wav";

type SoundOptions = "keyboard" | "typewriter" | "cherry";

// const SOUND_MAP: Record<SoundOptions, string> = {
// 	keyboard,
// 	typewriter: typeSoft,
// 	cherry: cherryBlue,
// };

const soundOptions: { label: SoundOptions }[] = [
	{ label: "keyboard" },
	{ label: "typewriter" },
	{ label: "cherry" },
];

const DEFAULT_SOUND_TYPE: SoundOptions = "cherry";
const SOUND_MODE: string = "sound";
const DEFAULT_SOUND_TYPE_KEY: string = "sound-type";
const SOUND_MODE_TOOLTIP: string = "typing sound";

export {
	soundOptions,
	DEFAULT_SOUND_TYPE,
	DEFAULT_SOUND_TYPE_KEY,
	SOUND_MODE,
	SOUND_MODE_TOOLTIP,
	// SOUND_MAP,
};
