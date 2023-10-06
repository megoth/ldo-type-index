import {SolidProfile} from "@/ldo/profile.typings";

export {profileContext} from "@/ldo/profile.context";
export {profileSchema} from "@/ldo/profile.schema";
export {SolidProfileShapeType} from "@/ldo/profile.shapeTypes";
export type {SolidProfile} from "@/ldo/profile.typings";

export function getName(profile: SolidProfile): string {
    return profile.name || profile.fn || "[Unknown name]";
}
