#include <stdio.h>
#include <stdlib.h>
#include "pasta.h"

int main() {
    // Exemplo de uso
    ArvPasta minhaArvore = {NULL};
    Inserir(&minhaArvore, "Alice");
    Inserir(&minhaArvore, "Bob");
    Inserir(&minhaArvore, "Charlie");
    Inserir(&minhaArvore, "David");

    printf("Árvore em ordem: ");
    InOrderTraversal(minhaArvore.raiz);

    free(minhaArvore.raiz);

    return 0;
}