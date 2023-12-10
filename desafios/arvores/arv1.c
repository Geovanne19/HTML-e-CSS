#include <stdio.h>
#include <stdlib.h>

typedef struct No {
    int num;
    struct No *esquerda;
    struct No *direita;
} No;

typedef struct Arv {
    No *raiz;
} Arv;

void Inserir(Arv *arv, int num) {
    No *aux = arv->raiz;
    No *novoNo = malloc(sizeof(No));
    novoNo->num = num;
    novoNo->esquerda = NULL;
    novoNo->direita = NULL;

    if (aux == NULL) {
        arv->raiz = novoNo;
        return;
    }

    while(aux) {
        if (num < aux->num) {
            if (aux->esquerda == NULL){
                aux->esquerda = novoNo;
                return;
            }
            aux = aux->esquerda;
        }
        else{
            if (aux->direita == NULL){
                aux->direita = novoNo;
                return;
            }
            aux = aux->direita;
        }
    }
}

void Imprimir(No *raiz) {
    if (raiz){
        Imprimir(raiz->esquerda);
        printf("%d ", raiz->num);
        Imprimir(raiz->direita);
    }
}

int main() {
    Arv arv;
    arv.raiz = NULL;
    int opcao, num;

    do {
        printf("\n\t0 - Sair\n\t1 - Inserir\n\t2 - Imprimir\n");
        scanf("%d", &opcao);

        switch (opcao){
        case 1:
            printf("\n\tDigite um num: ");
            scanf("%d", &num);
            Inserir(&arv, num);
            break;
        case 2:
            printf("\n\tPrimeira impressao:\n\t");
            Imprimir(arv.raiz);
            printf("\n");
            break;
        default:
            if (opcao != 0)
                printf("\n\tOpcao invalida!!!\n");
        }
    } while (opcao != 0);

    return 0;
}
