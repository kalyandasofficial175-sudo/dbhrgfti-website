$root = "D:\Projects\Dr. Bhupen Hazarika Regional Government Film & Television Institute"
Set-Location $root

# Remove stale build cache so dev server always starts clean
if (Test-Path "$root\.next") {
    Remove-Item -Recurse -Force "$root\.next"
}

node "$root\node_modules\next\dist\bin\next" dev
