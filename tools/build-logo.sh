#!/bin/bash
# Saves the doodle wordmark as assets/img/logo.png and logo-dark.png,
# and the yeti on its own as assets/img/mark.png and mark-dark.png.
# Needs Google Chrome and the local preview server: python3 -m http.server 4173
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="http://localhost:4173/tools/logo-capture.html"
W=900
H=$("$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=$W,900 --virtual-time-budget=9000 --dump-dom "$URL" 2>/dev/null | grep -o "SIZE:[0-9]*:END" | cut -d: -f2)
[ -n "$H" ] || { echo "Could not measure the logo"; exit 1; }
for v in "" "?dark"; do
  out="assets/img/logo.png"; [ -n "$v" ] && out="assets/img/logo-dark.png"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=$W,$H --force-device-scale-factor=2 \
    --default-background-color=00000000 --virtual-time-budget=9000 --screenshot="$out" "$URL$v" >/dev/null 2>&1
  echo "Wrote $out"
done
echo "Logo is ${W}x${H} (saved at 2x)"

# The small icon: the yeti on its own.
M=$("$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=$W,900 --virtual-time-budget=9000 --dump-dom "$URL?mark" 2>/dev/null | grep -o "SIZE:[0-9x]*:END" | cut -d: -f2)
[ -n "$M" ] || { echo "Could not measure the icon"; exit 1; }
for v in "?mark" "?mark&dark"; do
  out="assets/img/mark.png"; [ "$v" != "?mark" ] && out="assets/img/mark-dark.png"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=${M%x*},${M#*x} --force-device-scale-factor=3 \
    --default-background-color=00000000 --virtual-time-budget=9000 --screenshot="$out" "$URL$v" >/dev/null 2>&1
  echo "Wrote $out"
done
echo "Icon is $M (saved at 3x)"
