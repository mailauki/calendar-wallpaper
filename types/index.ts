import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ColorProps {
  bgColor: string[];
  setBgColor: React.Dispatch<React.SetStateAction<string[]>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
}

export type ColorParams = "bg" | "text";
export type WeekdayParams = "start" | "week-label" | "week-font" | "week-size";
export type MonthParams = "month-label" | "month-font" | "month-size";
export type YearParams = "year-label";
export type WallpaperParams = "ratio" | "size";
export type QueryParams =
  | "date"
  | ColorParams
  | WeekdayParams
  | MonthParams
  | YearParams
  | WallpaperParams;

export type WeekdayStart = "0" | "1";

// export type WeekdayLabel = "short" | "long" | "full";
export type WeekdayLabel = "long" | "short" | "narrow";
export type MonthLabel = "numeric" | "2-digit" | "long" | "short" | "narrow";
export type YearLabel = "show" | "hide";

export type WallpaperQuality = "4K" | "QHD" | "FHD" | "HD" | "SD";

export type AspectRatio =
  | "16:9"
  | "9:16"
  // | "5:4"
  // | "4:5"
  // | "7:5"
  // | "5:7"
  // | "4:3"
  // | "3:4"
  // | "5:3"
  // | "3:5"
  // | "3:2"
  // | "2:3"
  | "1:1";

export type WxH = { width: number; height: number };

export type Sizes = {
  [Ratio in AspectRatio]: WxH[];
};

export type MainFont = "font-sans" | "font-serif" | "font-mono";
export type OtherFont =
  | "open_sans"
  | "roboto"
  | "dotgothic16"
  | "montserrat"
  | "poppins"
  | "inter"
  | "roboto_condensed"
  | "oswald"
  | "raleway"
  | "nunito"
  | "rubik"
  | "playfair_display"
  | "kanit"
  | "merriweather"
  | "lora"
  | "quicksand"
  | "bebas_neue"
  | "libre_franklin"
  | "josefin_sans"
  | "libre_baskerville"
  | "arimo"
  | "source_code_pro"
  | "dosis"
  | "dancing_script"
  | "figtree"
  | "crimson_text"
  | "eb_garamond"
  | "bitter"
  | "fira_sans_condensed"
  | "anton"
  | "abel"
  | "barlow_condensed"
  | "space_grotesk"
  | "exo"
  | "teko"
  | "oxygen"
  | "red_hat_display"
  | "pacifico"
  | "lexend"
  | "comfortaa"
  | "caveat"
  | "cormorant_garamond"
  | "archivo_black"
  | "arvo"
  | "lilita_one"
  | "shadows_into_light"
  | "satisfy"
  | "permanent_marker"
  | "abril_fatface"
  | "play"
  | "indie_flower"
  | "spicy_Rice"
  | "urbanist"
  | "cinzel_decorative"
  | "vollkorn"
  | "marcellus"
  | "saira_condensed"
  | "concert_one"
  | "tinos"
  | "great_vibes"
  | "francois_one"
  | "orbitron"
  | "amatic_sc"
  | "montserrat_alternates"
  | "oleo_script"
  | "rubik_mono_one"
  | "creepster"
  | "silkscreen"
  | "pirata_one"
  | "yellowtail"
  // "sixtyfour" |
  | "crete_round"
  | "courgette"
  | "gloria_hallelujah"
  // "bodoni_moda" |
  | "mate_sc"
  | "sacramento"
  | "old_standard_tt"
  | "philosopher"
  | "yatra_one"
  | "gruppo"
  | "macondo"
  | "neucha"
  | "zeyada"
  | "itim"
  | "allura"
  | "poiret_one"
  | "advent_pro"
  | "sofia"
  | "patrick_Hand"
  | "syne"
  | "sarpanch"
  | "tangerine"
  | "architects_daughter"
  | "special_elite"
  | "epilogue"
  | "cuprum"
  | "literata"
  | "fira_sans_extra_condensed"
  | "pathway_gothic_one"
  | "yeseva_one"
  | "playfair_display_sc"
  | "bungee"
  | "parisienne"
  | "comic_neue"
  | "jura"
  | "handlee"
  | "reenie_beanie"
  | "faustina"
  | "forum"
  | "homemade_apple"
  | "sriracha"
  | "vt323"
  | "league_gothic"
  | "alex_brush"
  | "antonio"
  | "arsenal"
  | "nothing_you_could_do"
  | "six_caps"
  // "nanum_pen_script" |
  | "bad_script"
  | "unica_one"
  | "monoton"
  | "alegreya_sans_sc"
  | "syncopate"
  | "rock_salt"
  | "quantico"
  | "big_shoulders_display"
  | "viga"
  | "averia_serif_libre"
  | "economica"
  | "darker_grotesque"
  | "covered_by_your_grace"
  | "berkshire_swash"
  | "days_one"
  | "mrs_saint_delafield"
  | "gochi_hand"
  | "charm"
  | "just_another_hand"
  | "corben"
  | "allison"
  | "laila"
  | "palanquin"
  | "herr_von_muellerhoff"
  | "la_belle_aurore"
  | "delius"
  | "kiwi_maru"
  | "marcellus_sc"
  | "gowun_batang"
  // "fredericka_the_great" |
  | "italiana"
  | "shantell_sans"
  | "nixie_one"
  | "ms_madi"
  | "klee_one"
  | "yesteryear"
  | "limelight"
  | "petit_formal_script"
  | "bokor"
  | "love_ya_like_a_sister"
  // "waiting_for_the_sunrise" |
  | "quintessential"
  // "dawning_of_a_new_day" |
  | "grenze_gotisch"
  | "fanwood_text"
  | "ephesis"
  | "koho"
  | "gotu"
  // "imbue" |
  // "over_the_rainbow" |
  | "pompiere"
  | "aboreto"
  | "major_mono_display"
  | "notable"
  | "square_peg"
  // "im_fell_english_sc" |
  | "aladin"
  | "hurricane"
  | "quando"
  | "fondamento"
  | "sue_ellen_francisco"
  | "federo"
  | "league_script"
  | "meow_script"
  | "just_me_again_down_here"
  | "gugi"
  | "elsie"
  // "supermercado_one" |
  | "happy_monkey"
  | "iceberg"
  | "vast_shadow"
  | "walter_turncoat"
  | "sofadi_one"
  // "kalnia" |
  | "numans"
  | "bilbo_swash_caps"
  | "charmonman"
  | "bubbler_one"
  | "carme"
  | "amarante"
  | "metamorphous"
  | "gaegu"
  | "uncial_antiqua"
  | "the_girl_next_door"
  | "wire_one"
  | "grape_nuts"
  | "windsong"
  // "jacquard_24" |
  | "delius_unicase"
  | "cherry_swash"
  | "hachi_maru_pop"
  // "swanky_and_moo_moo" |
  | "glass_antiqua"
  | "fontdiner_swanky"
  | "lobster_two";
export type Font = MainFont | OtherFont;
export type FontType = { key: string; value: Font; label: string };
