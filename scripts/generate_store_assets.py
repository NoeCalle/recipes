"""Generate store listing visual assets without external dependencies."""
from __future__ import annotations

import struct
import zlib
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Tuple

BASE_DIR = Path(__file__).resolve().parents[1]
STORE_DIR = BASE_DIR / "assets" / "store"
SCREENSHOT_DIR = STORE_DIR / "screenshots"

STORE_DIR.mkdir(parents=True, exist_ok=True)
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

Color = Tuple[int, int, int]


@dataclass
class LanguageCopy:
    welcome_title: str
    welcome_subtitle: str
    welcome_cta: str
    ingredient_title: str
    ingredient_selected: str
    ingredient_clear: str
    ingredient_cta: str
    result_matches: str
    result_missing: str
    result_steps: str
    result_choose_other: str
    result_go_home: str
    result_description: str
    steps: Tuple[str, str, str]


COPY: Dict[str, LanguageCopy] = {
    "es": LanguageCopy(
        welcome_title="Sabores del Peru",
        welcome_subtitle="Descubre recetas criollas seleccionando tus ingredientes favoritos.",
        welcome_cta="Comenzar",
        ingredient_title="Elige tus ingredientes",
        ingredient_selected="Seleccionados 3 - Lomo saltado",
        ingredient_clear="Limpiar",
        ingredient_cta="Generar receta peruana",
        result_matches="Coincidencias",
        result_missing="Te hara falta",
        result_steps="Pasos",
        result_choose_other="Elegir otros ingredientes",
        result_go_home="Volver al inicio",
        result_description="Salteado criollo con lomo, cebolla y tomate flameado.",
        steps=(
            "Saltea el lomo con fuego alto.",
            "Anade cebolla, tomate y sillao.",
            "Sirve con papas y arroz blanco.",
        ),
    ),
    "en": LanguageCopy(
        welcome_title="Flavors of Peru",
        welcome_subtitle="Discover Creole recipes by picking your favorite ingredients.",
        welcome_cta="Get started",
        ingredient_title="Choose your ingredients",
        ingredient_selected="Selected 3 - Lomo Saltado",
        ingredient_clear="Clear",
        ingredient_cta="Create Peruvian recipe",
        result_matches="Matches",
        result_missing="You will need",
        result_steps="Steps",
        result_choose_other="Choose other ingredients",
        result_go_home="Back to start",
        result_description="Stir fried beef with onions, tomatoes and wok sauce.",
        steps=(
            "Sear the beef quickly over high heat.",
            "Add onion, tomato and soy sauce.",
            "Serve with fries and white rice.",
        ),
    ),
}


FONT_DATA: Dict[str, List[str]] = {
    "A": [" 111 ", "1   1", "1   1", "11111", "1   1", "1   1", "1   1"],
    "B": ["1111 ", "1   1", "1   1", "1111 ", "1   1", "1   1", "1111 "],
    "C": [" 111 ", "1   1", "1    ", "1    ", "1    ", "1   1", " 111 "],
    "D": ["111  ", "1  1 ", "1   1", "1   1", "1   1", "1  1 ", "111  "],
    "E": ["11111", "1    ", "1    ", "1111 ", "1    ", "1    ", "11111"],
    "F": ["11111", "1    ", "1    ", "1111 ", "1    ", "1    ", "1    "],
    "G": [" 111 ", "1   1", "1    ", "1 111", "1   1", "1   1", " 111 "],
    "H": ["1   1", "1   1", "1   1", "11111", "1   1", "1   1", "1   1"],
    "I": [" 111 ", "  1  ", "  1  ", "  1  ", "  1  ", "  1  ", " 111 "],
    "J": ["  111", "   1", "   1", "   1", "   1", "1  1", " 11 "],
    "K": ["1  1 ", "1 1  ", "11   ", "1 1  ", "1  1 ", "1   1", "1   1"],
    "L": ["1    ", "1    ", "1    ", "1    ", "1    ", "1    ", "11111"],
    "M": ["1   1", "11 11", "1 1 1", "1   1", "1   1", "1   1", "1   1"],
    "N": ["1   1", "11  1", "1 1 1", "1  11", "1   1", "1   1", "1   1"],
    "O": [" 111 ", "1   1", "1   1", "1   1", "1   1", "1   1", " 111 "],
    "P": ["1111 ", "1   1", "1   1", "1111 ", "1    ", "1    ", "1    "],
    "Q": [" 111 ", "1   1", "1   1", "1   1", "1 1 1", "1  1 ", " 11 1"],
    "R": ["1111 ", "1   1", "1   1", "1111 ", "1  1 ", "1   1", "1   1"],
    "S": [" 111 ", "1   1", "1    ", " 111 ", "    1", "1   1", " 111 "],
    "T": ["11111", "  1  ", "  1  ", "  1  ", "  1  ", "  1  ", "  1  "],
    "U": ["1   1", "1   1", "1   1", "1   1", "1   1", "1   1", " 111 "],
    "V": ["1   1", "1   1", "1   1", "1   1", "1   1", " 1 1 ", "  1  "],
    "W": ["1   1", "1   1", "1   1", "1 1 1", "1 1 1", "11 11", "1   1"],
    "X": ["1   1", "1   1", " 1 1 ", "  1  ", " 1 1 ", "1   1", "1   1"],
    "Y": ["1   1", "1   1", " 1 1 ", "  1  ", "  1  ", "  1  ", "  1  "],
    "Z": ["11111", "   1 ", "  1  ", " 1   ", "1    ", "1    ", "11111"],
    "0": [" 111 ", "1  11", "1 1 1", "1 1 1", "11  1", "1   1", " 111 "],
    "1": ["  1  ", " 11  ", "1 1  ", "  1  ", "  1  ", "  1  ", "11111"],
    "2": [" 111 ", "1   1", "    1", "   1 ", "  1  ", " 1   ", "11111"],
    "3": ["1111 ", "    1", "    1", " 111 ", "    1", "    1", "1111 "],
    "4": ["   1 ", "  11", " 1 1", "1  1", "11111", "   1", "   1"],
    "5": ["11111", "1    ", "1    ", "1111 ", "    1", "    1", "1111 "],
    "6": [" 111 ", "1   1", "1    ", "1111 ", "1   1", "1   1", " 111 "],
    "7": ["11111", "    1", "   1 ", "   1 ", "  1  ", "  1  ", "  1  "],
    "8": [" 111 ", "1   1", "1   1", " 111 ", "1   1", "1   1", " 111 "],
    "9": [" 111 ", "1   1", "1   1", " 1111", "    1", "1   1", " 111 "],
    " ": ["     ", "     ", "     ", "     ", "     ", "     ", "     "],
    "-": ["     ", "     ", "     ", " 111 ", "     ", "     ", "     "],
    ".": ["     ", "     ", "     ", "     ", "     ", " 11  ", " 11  "],
}


def sanitize_text(text: str) -> str:
    replacements = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u",
        "ñ": "n",
        "Á": "A",
        "É": "E",
        "Í": "I",
        "Ó": "O",
        "Ú": "U",
        "Ñ": "N",
        "·": "-",
        ",": "",
    }
    for src, target in replacements.items():
        text = text.replace(src, target)
    return text


class Canvas:
    def __init__(self, width: int, height: int, background: Color = (255, 255, 255)):
        self.width = width
        self.height = height
        self.pixels: List[List[Color]] = [[background for _ in range(width)] for _ in range(height)]

    def fill_gradient(self, top: Color, bottom: Color):
        for y in range(self.height):
            factor = y / max(1, self.height - 1)
            color = tuple(int(top[i] + (bottom[i] - top[i]) * factor) for i in range(3))
            for x in range(self.width):
                self.pixels[y][x] = color

    def fill(self, color: Color):
        for y in range(self.height):
            for x in range(self.width):
                self.pixels[y][x] = color

    def draw_rect(self, x1: int, y1: int, x2: int, y2: int, color: Color):
        for y in range(max(0, y1), min(self.height, y2)):
            row = self.pixels[y]
            for x in range(max(0, x1), min(self.width, x2)):
                row[x] = color

    def draw_round_rect(self, x1: int, y1: int, x2: int, y2: int, radius: int, color: Color):
        # Rounded corners are approximated using a solid rectangle to keep the
        # implementation simple and dependency-free.
        self.draw_rect(x1, y1, x2, y2, color)

    def draw_circle(self, cx: int, cy: int, radius: int, color: Color):
        for y in range(max(0, cy - radius), min(self.height, cy + radius)):
            for x in range(max(0, cx - radius), min(self.width, cx + radius)):
                if (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2:
                    self.pixels[y][x] = color

    def draw_text(self, x: int, y: int, text: str, color: Color, scale: int = 4, max_width: int | None = None, line_spacing: int = 8):
        sanitized = sanitize_text(text.upper())
        cursor_x = x
        cursor_y = y
        for ch in sanitized:
            if ch == "\n":
                cursor_x = x
                cursor_y += (7 * scale) + line_spacing
                continue
            glyph = FONT_DATA.get(ch)
            if glyph is None:
                glyph = FONT_DATA[" "]
            glyph_width = len(glyph[0]) * scale
            if max_width and cursor_x + glyph_width > x + max_width:
                cursor_x = x
                cursor_y += (7 * scale) + line_spacing
            for row_index, row in enumerate(glyph):
                for col_index, pixel in enumerate(row):
                    if pixel != " ":
                        for dy in range(scale):
                            for dx in range(scale):
                                px = cursor_x + col_index * scale + dx
                                py = cursor_y + row_index * scale + dy
                                if 0 <= px < self.width and 0 <= py < self.height:
                                    self.pixels[py][px] = color
            cursor_x += glyph_width + scale

    def save(self, path: Path):
        save_png(path, self.pixels)


def save_png(path: Path, pixels: List[List[Color]]):
    height = len(pixels)
    width = len(pixels[0]) if height > 0 else 0
    with path.open("wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")

        def write_chunk(chunk_type: bytes, data: bytes):
            f.write(struct.pack(">I", len(data)))
            f.write(chunk_type)
            f.write(data)
            checksum = zlib.crc32(chunk_type + data) & 0xFFFFFFFF
            f.write(struct.pack(">I", checksum))

        ihdr = struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0)
        write_chunk(b"IHDR", ihdr)

        raw_rows = []
        for row in pixels:
            row_data = bytearray()
            for r, g, b in row:
                row_data.extend([r, g, b])
            raw_rows.append(bytes([0]) + bytes(row_data))
        compressed = zlib.compress(b"".join(raw_rows))
        write_chunk(b"IDAT", compressed)
        write_chunk(b"IEND", b"")


def create_app_icon():
    canvas = Canvas(512, 512)
    canvas.fill_gradient((249, 217, 118), (234, 84, 85))
    canvas.draw_round_rect(110, 190, 402, 360, 40, (255, 255, 255))
    canvas.draw_round_rect(140, 150, 372, 210, 30, (255, 255, 255))
    canvas.draw_circle(256, 120, 22, (255, 255, 255))
    canvas.draw_circle(200, 360, 90, (0, 0, 0))
    canvas.draw_circle(312, 360, 90, (0, 0, 0))
    canvas.draw_round_rect(150, 330, 362, 360, 10, (255, 255, 255))
    canvas.draw_circle(200, 360, 80, (255, 255, 255))
    canvas.draw_circle(312, 360, 80, (255, 255, 255))
    canvas.save(STORE_DIR / "app-icon.png")


def create_feature_graphic():
    canvas = Canvas(1024, 500)
    canvas.fill_gradient((249, 217, 118), (234, 84, 85))
    canvas.draw_text(60, 80, "Sabores del Peru", (255, 255, 255), scale=6)
    canvas.draw_text(60, 240, "Encuentra recetas criollas segun los ingredientes que tienes.", (255, 255, 255), scale=4, max_width=900)

    chips = [
        "Aji amarillo",
        "Papa amarilla",
        "Lomo fino",
        "Culantro",
    ]
    x = 60
    y = 360
    for chip in chips:
        text_width = len(sanitize_text(chip.upper())) * (5 * 3 + 3)
        canvas.draw_round_rect(x, y, x + text_width + 40, y + 60, 20, (219, 58, 52))
        canvas.draw_text(x + 20, y + 12, chip, (255, 255, 255), scale=3)
        x += text_width + 80
    canvas.save(STORE_DIR / "feature-graphic.png")


def create_welcome_screen(language: str):
    copy = COPY[language]
    canvas = Canvas(1080, 1920)
    canvas.fill_gradient((249, 217, 118), (234, 84, 85))
    canvas.draw_round_rect(160, 480, 920, 1480, 60, (255, 255, 255))
    canvas.draw_text(220, 640, copy.welcome_title, (219, 58, 52), scale=6, max_width=680)
    canvas.draw_text(220, 820, copy.welcome_subtitle, (47, 46, 65), scale=4, max_width=640)
    canvas.draw_round_rect(360, 1280, 720, 1380, 30, (219, 58, 52))
    canvas.draw_text(390, 1300, copy.welcome_cta, (255, 255, 255), scale=4)
    canvas.save(SCREENSHOT_DIR / f"welcome-{language}.png")


def create_ingredient_screen(language: str):
    copy = COPY[language]
    canvas = Canvas(1080, 1920, background=(248, 243, 237))
    canvas.draw_text(120, 160, copy.ingredient_title, (219, 58, 52), scale=5)
    canvas.draw_text(120, 320, copy.ingredient_selected, (80, 80, 80), scale=4)
    canvas.draw_round_rect(820, 150, 1000, 240, 20, (219, 58, 52))
    canvas.draw_text(840, 180, copy.ingredient_clear, (255, 255, 255), scale=3)
    ingredients = [
        ("Aji amarillo", True),
        ("Cebolla", True),
        ("Papa amarilla", False),
        ("Sillao", False),
        ("Tomate", False),
        ("Culantro", False),
    ]
    start_x, start_y = 100, 420
    width, height = 280, 260
    spacing_x, spacing_y = 320, 300
    for index, (label, selected) in enumerate(ingredients):
        col = index % 3
        row = index // 3
        x1 = start_x + col * spacing_x
        y1 = start_y + row * spacing_y
        x2 = x1 + width
        y2 = y1 + height
        color = (219, 58, 52) if selected else (255, 255, 255)
        text_color = (255, 255, 255) if selected else (47, 46, 65)
        canvas.draw_round_rect(x1, y1, x2, y2, 30, color)
        if selected:
            canvas.draw_text(x1 + 100, y1 + 60, "OK", (255, 255, 255), scale=4)
        canvas.draw_text(x1 + 40, y2 - 100, label, text_color, scale=3, max_width=200)
    canvas.draw_round_rect(140, 1520, 940, 1640, 40, (219, 58, 52))
    canvas.draw_text(160, 1540, copy.ingredient_cta, (255, 255, 255), scale=4, max_width=760)
    canvas.save(SCREENSHOT_DIR / f"ingredients-{language}.png")


def create_result_screen(language: str):
    copy = COPY[language]
    canvas = Canvas(1080, 1920, background=(248, 243, 237))
    canvas.draw_round_rect(120, 180, 960, 600, 40, (255, 255, 255))
    canvas.draw_round_rect(160, 220, 340, 300, 20, (248, 212, 206))
    canvas.draw_text(180, 240, "Costa", (219, 58, 52), scale=3)
    canvas.draw_text(180, 340, "Lomo saltado", (47, 46, 65), scale=5)
    canvas.draw_text(180, 460, copy.result_description, (90, 90, 90), scale=3, max_width=720)
    canvas.draw_text(180, 540, "30 min", (246, 170, 28), scale=4)
    canvas.draw_text(420, 540, "Media", (246, 170, 28), scale=4)

    def draw_chip(x: int, y: int, label: str, color: Color) -> int:
        text = sanitize_text(label.upper())
        width = len(text) * (5 * 3 + 3)
        canvas.draw_round_rect(x, y, x + width + 40, y + 60, 20, color)
        canvas.draw_text(x + 20, y + 10, label, (255, 255, 255), scale=3)
        return x + width + 60

    canvas.draw_text(120, 680, copy.result_matches, (47, 46, 65), scale=4)
    x = 120
    for chip in ["Aji amarillo", "Cebolla roja", "Perejil"]:
        x = draw_chip(x, 740, chip, (46, 139, 87))

    canvas.draw_text(120, 860, copy.result_missing, (47, 46, 65), scale=4)
    x = 120
    for chip in ["Papas fritas", "Arroz"]:
        x = draw_chip(x, 920, chip, (192, 57, 43))

    canvas.draw_text(120, 1040, copy.result_steps, (47, 46, 65), scale=4)
    for idx, step in enumerate(copy.steps, start=1):
        canvas.draw_circle(170, 1130 + idx * 120, 40, (219, 58, 52))
        canvas.draw_text(150, 1110 + idx * 120, str(idx), (255, 255, 255), scale=4)
        canvas.draw_text(240, 1100 + idx * 120, step, (47, 46, 65), scale=3, max_width=700)

    canvas.draw_round_rect(160, 1540, 940, 1640, 30, (255, 255, 255))
    canvas.draw_text(180, 1550, copy.result_choose_other, (219, 58, 52), scale=3, max_width=700)
    canvas.draw_round_rect(160, 1680, 940, 1780, 30, (219, 58, 52))
    canvas.draw_text(180, 1690, copy.result_go_home, (255, 255, 255), scale=3, max_width=700)
    canvas.save(SCREENSHOT_DIR / f"result-{language}.png")


def main():
    create_app_icon()
    create_feature_graphic()
    for language in COPY.keys():
        create_welcome_screen(language)
        create_ingredient_screen(language)
        create_result_screen(language)


if __name__ == "__main__":
    main()
