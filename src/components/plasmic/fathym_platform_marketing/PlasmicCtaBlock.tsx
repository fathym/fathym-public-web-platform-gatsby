// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6fZSWkofPMXR1NLi1bFj7o
// Component: y1BKf6ZH3B-PH
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 7une6Ae6nQQ_5/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as plasmic_habistack_marketing_css from "../habistack_marketing/plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as projectcss from "./plasmic_fathym_platform_marketing.module.css"; // plasmic-import: 6fZSWkofPMXR1NLi1bFj7o/projectcss
import * as sty from "./PlasmicCtaBlock.module.css"; // plasmic-import: y1BKf6ZH3B-PH/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: UoPjMarBjLAJl_/icon

export type PlasmicCtaBlock__VariantMembers = {};
export type PlasmicCtaBlock__VariantsArgs = {};
type VariantPropType = keyof PlasmicCtaBlock__VariantsArgs;
export const PlasmicCtaBlock__VariantProps = new Array<VariantPropType>();

export type PlasmicCtaBlock__ArgsType = {};
type ArgPropType = keyof PlasmicCtaBlock__ArgsType;
export const PlasmicCtaBlock__ArgProps = new Array<ArgPropType>();

export type PlasmicCtaBlock__OverridesType = {
  root?: p.Flex<"section">;
  outer?: p.Flex<"div">;
  container?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultCtaBlockProps {
  className?: string;
}

function PlasmicCtaBlock__RenderFunc(props: {
  variants: PlasmicCtaBlock__VariantsArgs;
  args: PlasmicCtaBlock__ArgsType;
  overrides: PlasmicCtaBlock__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_new_habistack_com_css.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_habistack_marketing_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"outer"}
        data-plasmic-override={overrides.outer}
        className={classNames(projectcss.all, sty.outer)}
      >
        <div
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container)}
        >
          <div className={classNames(projectcss.all, sty.column__jsXJ)}>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"To Make Requests For The\nFurther Information"}
            </h2>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ntfIk
              )}
            >
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__ptaYf)}>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"blue" as const}
              link={"#" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___384R
                )}
              >
                {"Join With Now"}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "outer", "container", "h2", "button"],
  outer: ["outer", "container", "h2", "button"],
  container: ["container", "h2", "button"],
  h2: ["h2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  outer: "div";
  container: "div";
  h2: "h2";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCtaBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCtaBlock__VariantsArgs;
    args?: PlasmicCtaBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCtaBlock__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCtaBlock__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCtaBlock__ArgProps,
          internalVariantPropNames: PlasmicCtaBlock__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCtaBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaBlock";
  } else {
    func.displayName = `PlasmicCtaBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaBlock = Object.assign(
  // Top-level PlasmicCtaBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    outer: makeNodeComponent("outer"),
    container: makeNodeComponent("container"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCtaBlock
    internalVariantProps: PlasmicCtaBlock__VariantProps,
    internalArgProps: PlasmicCtaBlock__ArgProps
  }
);

export default PlasmicCtaBlock;
/* prettier-ignore-end */
