import { expect, it } from "vitest";
import { buildWhisperLanguageArgs } from "./language";

it("preserves the speaker language and only translates when requested", () => {
	expect(buildWhisperLanguageArgs({ language: "km" })).toEqual(["-l", "km"]);
	expect(buildWhisperLanguageArgs({ language: "km", translateToEnglish: true })).toEqual([
		"-l",
		"km",
		"-tr",
	]);
	expect(buildWhisperLanguageArgs({ translateToEnglish: true })).toEqual(["-l", "auto", "-tr"]);
	expect(buildWhisperLanguageArgs({ language: "  " })).toEqual(["-l", "auto"]);
});
