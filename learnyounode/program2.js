var suma = 0;

if(process.argv.length > 2)
{
    for(var i = 2;i < process.argv.length; i++)
        suma += Number(process.argv[i]);
}

console.log(suma);
