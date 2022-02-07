#include <stdio.h>

void Exibe2(int v, int x, int y, int z, char a, char b, char c, char d)
{
  putc('\n', stdout);

  printf("\n%c:[%d] %c:[%d] %c:[%d] %c:[%d]\n", a, v, b, x, c, y, d, z);

  putc('\n', stdout);
  putchar('\n');
}

int main(void)
{
  Exibe2(4, 3, 2, 1, 'd', 'c', 'b', 'a');
  return 0;
}