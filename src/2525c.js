import tsv2json from "./tsv2json.js";

import mil_std_2525c_space from "./../tsv-tables/2525c/space.tsv";
import mil_std_2525c_air from "./../tsv-tables/2525c/air.tsv";
import mil_std_2525c_ground_unit from "./../tsv-tables/2525c/ground-unit.tsv";
import mil_std_2525c_ground_equipment from "./../tsv-tables/2525c/ground-equipment.tsv";
import mil_std_2525c_ground_installation from "./../tsv-tables/2525c/ground-installation.tsv";

import mil_std_2525c_sea_surface from "./../tsv-tables/2525c/sea-surface.tsv";
import mil_std_2525c_sub_surface from "./../tsv-tables/2525c/sub-surface.tsv";
import mil_std_2525c_sof from "./../tsv-tables/2525c/sof.tsv";

import mil_std_2525c_tactical_graphics from "./../tsv-tables/2525c/tactical-graphics.tsv";
import mil_std_2525c_signals_intelligence from "./../tsv-tables/2525c/signals-intelligence.tsv";
import mil_std_2525c_stbops from "./../tsv-tables/2525c/stability-operations.tsv";
import mil_std_2525c_ems from "./../tsv-tables/2525c/emergency-management.tsv";

export default {
  WAR: {
    name: "WARFIGHTING",
    SPC: {
      name: "SPACE",
      mainIcon: tsv2json(mil_std_2525c_space)
    },
    AIRTRK: {
      name: "AIR",
      mainIcon: tsv2json(mil_std_2525c_air)
    },
    GRDTRK_UNT: {
      name: "GROUND UNIT",
      mainIcon: tsv2json(mil_std_2525c_ground_unit)
    },
    GRDTRK_EQT: {
      name: "GROUND EQUIPMENT",
      mainIcon: tsv2json(mil_std_2525c_ground_equipment)
    },
    GRDTRK_INS: {
      name: "GROUND INSTALLATION",
      mainIcon: tsv2json(mil_std_2525c_ground_installation)
    },
    SSUF: {
      name: "SEA SURFACE",
      mainIcon: tsv2json(mil_std_2525c_sea_surface)
    },
    SBSUF: {
      name: "SUBSURFACE",
      mainIcon: tsv2json(mil_std_2525c_sub_surface)
    },
    SOFUNT: {
      name: "SPECIAL OPERATIONS FORCES (SOF)",
      mainIcon: tsv2json(mil_std_2525c_sof)
    }
  },
  TACGRP: {
    name: "TACTICAL GRAPHICS",
    mainIcon: tsv2json(mil_std_2525c_tactical_graphics)
  },
  SIGINT: {
    name: "SIGNALS INTELLIGENCE",
    mainIcon: tsv2json(mil_std_2525c_signals_intelligence)
  },
  STBOPS: {
    name: "STABILITY OPERATIONS (SO)",
    mainIcon: tsv2json(mil_std_2525c_stbops)
  },
  EMS: {
    name: "EMERGENCY MANAGEMENT SYMBOLS",
    mainIcon: tsv2json(mil_std_2525c_ems)
  }
};
