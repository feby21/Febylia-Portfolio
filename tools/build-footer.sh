#!/bin/bash
# Rebuilds assets/js/doodle-footer.js from the .tsx files in components/ui.
# Needs Google Chrome and the local preview server running:
#   python3 -m http.server 4173
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --virtual-time-budget=20000 --dump-dom \
  "http://localhost:4173/tools/build-footer.html" 2>/dev/null > /tmp/doodle-footer-build.html
python3 - <<'PY'
import re, base64, sys
html = open("/tmp/doodle-footer-build.html").read()
m = re.search(r"B64:([A-Za-z0-9+/=]+):END", html)
if not m:
    err = re.search(r"ERROR:[^<]*", html)
    sys.exit("Build failed: " + (err.group(0) if err else "no output"))
js = base64.b64decode(m.group(1)).decode("utf-8")
open("assets/js/doodle-footer.js", "w").write(js)
print("Wrote assets/js/doodle-footer.js (%d bytes)" % len(js))
PY
