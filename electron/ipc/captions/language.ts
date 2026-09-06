export function buildWhisperLanguageArgs(options: {
	language?: string;
	translateToEnglish?: boolean;
}): string[] {
	return [
		"-l",
		options.language?.trim() || "auto",
		...(options.translateToEnglish === true ? ["-tr"] : []),
	];
}
