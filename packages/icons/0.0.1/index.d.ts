export type AllIcons = "action-right" | "barcode" | "arrow-right" | "error" | "number" | "sucess";
export type MediumIcons = "action-right" | "barcode";
export type SmallIcons = "arrow-right" | "error" | "number" | "sucess";
export interface Icon {
	name: string;
	category: string;
	content: string;
}
