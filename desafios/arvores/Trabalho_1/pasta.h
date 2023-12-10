#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct NoPasta
{
    char nome[30];
    struct NoPasta *esquerda;
    struct NoPasta *direita;
} NoPasta;

typedef struct ArvPasta
{
    NoPasta *raiz;
} ArvPasta;

void Inserir(ArvPasta* arv, char nome[]) {
    NoPasta * aux = arv->raiz;
    NoPasta *novoNo = malloc(sizeof(NoPasta));
    strcpy(novoNo->nome, nome);
    novoNo->esquerda = NULL;
    novoNo->direita = NULL;

    if (aux == NULL) {
        arv->raiz = novoNo;
        return;
    }

    while (aux) {
        int comparacao = strcmp(nome, aux->nome);
        if (comparacao < 0) {
            if (aux->esquerda == NULL) {
                aux->esquerda = novoNo;
                return;
            }
            aux = aux->esquerda;
        } else if (comparacao > 0) {
            if (aux->direita == NULL) {
                aux->direita = novoNo;
                return;
            }
            aux = aux->direita;
        } else {
            free(novoNo); 
            return;
        }
    }
}

void InOrderTraversal(NoPasta* raiz) {
    if (raiz != NULL) {
        InOrderTraversal(raiz->esquerda);
        printf("%s ", raiz->nome);
        InOrderTraversal(raiz->direita);
    }
}

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