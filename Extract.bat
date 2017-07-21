@echo off

set TMFILE=Jenkins

if exist Log\extract.log (
    del Log\extract.log
)

echo    *                              >>Log\extract.log
echo    *******************************>>Log\extract.log
echo    * Process START : %TIME%       >>Log\extract.log
echo    *******************************>>Log\extract.log
echo    *                              >>Log\extract.log


cd fromDev

java -Xms1024m -Xmx1024m -jar ..\i18ntool.jar >>..\Log\extract.log ^
     -mode extract ^
     -conf Jenkins_extract.conf ^
     -data %TMFILE%.i18n

cd ..

echo    *                            >>Log\extract.log
echo    *****************************>>Log\extract.log
echo    * Process END : %TIME%       >>Log\extract.log
echo    *****************************>>Log\extract.log
echo    *                            >>Log\extract.log

:exit

