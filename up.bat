@REM im Terminal die Funktion mit "./up.bat" aufrufen
@REM z.B.: "./up.bat update-2024-03-10" das "update-2024-03-10" ist der Kommentar dazu

git pull
git add .
git commit -m "%*"
git push