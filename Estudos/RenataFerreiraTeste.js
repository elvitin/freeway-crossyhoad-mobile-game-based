function Exibe(numero)
{
  console.log('Valor:', numero);
}

function Exibe2(v, x, y, z, a, b, c, d)
{
  console.log('\n');

  // 1 Forma
  console.log(a+':['+v+'] '+b+':['+x+'] '+c+':['+y+'] '+d+':['+z+']');

  // 2 Forma
  console.log(`${a}:[${v}] ${b}:[${x}] ${c}:[${y}] ${d}:[${z}]`);

  // 3 Forma
  console.log(`${a}:[${v}]`,`${b}:[${x}]`,`${c}:[${y}] `+`${d}:[${z}]`);


  console.log('\n');
}

function LeValor()
{
  let x;
  x = parseInt(prompt("Valor ->"))
  return x;
}

function Calcula(obj, c, d) {
  obj.a = obj.b++;
  obj.b = c + d * 2;
  c = obj.a + obj.b + c + d;
  d = obj.a * 4 / 2; 
}

function Calcula2 (x, y, obj)
{
  x = y--;
  obj.z = x + y;
  y = obj.z++;
  return x + y + obj.z;
}

function Calcula3 (x, y) {
  x = y *= 2;
  y = x + 2;
  return x + y;

  if (x > y)
    Exibe(x);
  else
    Exibe2(y);
}

let obj = {
  m, n, p
};

let o;

obj.m = 4;
obj.n = 2;

o = LeValor();
obj.p = LeValor();

Exibe(obj.m + obj.n + o + obj.p);
Calcula(obj, o, obj.p);
Exibe2(obj.m, obj.n, o, obj.p, 'm', 'n', 'o', 'p');
Exibe(Calcula2(o + obj.p * 2, obj.m + 8, obj.n));
Exibe(obj.n);
obj.p = Calcula2(obj.n - 2, obj.m + 3, obj);

// Exibe2(4, 3, 2, 1, 'd', 'c', 'b', 'a');
