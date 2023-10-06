import {SolidProfile} from "@/ldo/profile.typings";
import {profileContext} from "@/ldo/profile.context";
import {profileSchema} from "@/ldo/profile.schema";
import {SolidProfileShapeType} from "@/ldo/profile.shapeTypes";

export type {SolidProfile} from "@/ldo/profile.typings";

function getName(profile: SolidProfile): string {
    return profile.name || profile.fn || "[Unknown name]";
}

export default {
    getName,
    profileContext,
    profileSchema,
    SolidProfileShapeType,
};