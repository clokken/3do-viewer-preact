import { Object3do } from "@takingdoms/lib-3do";
import { GlColorBuffer } from "./buffer/gl-color-buffer";
import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";
import { GlModelHelpers } from "./gl-model-helpers";
import { ColorRGBA, Vector3 } from "./types";

export function glEntityFrom3do(object3do: Object3do, ctx: GlContext): GlEntity {
  const model = glModelFrom3do(object3do, ctx);
  const entity = new GlEntity(model);

  return entity;
}

function glModelFrom3do(object3do: Object3do, ctx: GlContext): GlModel {
  const v0: Vector3 = [-1,  0, +1];
  const v1: Vector3 = [-1,  0, -1];
  const v2: Vector3 = [+1,  0, -1];
  const v3: Vector3 = [+1,  0, +1];
  const v4: Vector3 = [ 0, +1,  0];

  const wht: ColorRGBA = [1.0, 1.0, 1.0, 1.0];
  const red: ColorRGBA = [1.0, 0.0, 0.0, 1.0];
  const gre: ColorRGBA = [0.0, 1.0, 0.0, 1.0];
  const blu: ColorRGBA = [0.0, 0.0, 1.0, 1.0];
  const yel: ColorRGBA = [1.0, 1.0, 0.0, 1.0];

  return GlModelHelpers.createModelFromSmartColoredVertices(ctx, [
    { vertex: v0, color: blu }, { vertex: v1, color: red }, { vertex: v4, color: wht },
    { vertex: v1, color: red }, { vertex: v2, color: gre }, { vertex: v4, color: wht },
    { vertex: v2, color: gre }, { vertex: v3, color: yel }, { vertex: v4, color: wht },
    { vertex: v0, color: blu }, { vertex: v3, color: yel }, { vertex: v4, color: wht },

    { vertex: v0, color: blu }, { vertex: v1, color: red }, { vertex: v2, color: gre },
    { vertex: v0, color: blu }, { vertex: v2, color: gre }, { vertex: v3, color: yel },
  ]);
}
