const board = document.getElementById('checkers-board');
const turnInfo = document.getElementById('turn-info');
const restartBtn = document.getElementById('restart-btn');
let turn = 'white'; // Começa com as brancas
let selectedPiece = null;

// Inicializa o tabuleiro com as peças
function createBoard() {
    board.innerHTML = ''; // Limpar o tabuleiro

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square', (row + col) % 2 === 0 ? 'white' : 'black');
            square.dataset.row = row;
            square.dataset.col = col;

            // Adiciona peças às fileiras iniciais
            if (row < 3 && (row + col) % 2 !== 0) {
                addPiece(square, 'black-piece');
            } else if (row > 4 && (row + col) % 2 !== 0) {
                addPiece(square, 'white-piece');
            }

            board.appendChild(square);
        }
    }
}

// Função para adicionar uma peça a um quadrado
function addPiece(square, pieceClass) {
    const piece = document.createElement('div');
    piece.classList.add('piece', pieceClass);
    piece.addEventListener('click', handlePieceClick);
    square.appendChild(piece);
}

// Função para lidar com o clique em uma peça
function handlePieceClick(event) {
    const piece = event.target;
    const square = piece.parentElement;
    const row = parseInt(square.dataset.row);
    const col = parseInt(square.dataset.col);

    // Verifica se é a vez da peça clicada
    if (piece.classList.contains(`${turn}-piece`) || piece.classList.contains('king-piece')) {
        if (selectedPiece) {
            clearHighlights();
        }
        selectedPiece = piece;
        highlightPossibleMoves(row, col);
    }
}

// Função para destacar movimentos possíveis
function highlightPossibleMoves(row, col) {
    clearHighlights();

    const pieceClass = selectedPiece.classList.contains('black-piece') ? 'black-piece' : 'white-piece';
    const direction = pieceClass === 'white-piece' ? -1 : 1;

    // Movimento simples (uma casa para frente)
    highlightMove(row + direction, col - 1);
    highlightMove(row + direction, col + 1);

    // Captura possível
    highlightCapture(row, col, row + 2 * direction, col - 2, row + direction, col - 1);
    highlightCapture(row, col, row + 2 * direction, col + 2, row + direction, col + 1);
}

// Função para destacar uma casa para mover
function highlightMove(row, col) {
    if (isValidSquare(row, col) && !isOccupied(row, col)) {
        const square = getSquare(row, col);
        square.classList.add('highlight');
        square.addEventListener('click', movePiece);
    }
}

// Função para destacar uma captura
function highlightCapture(row, col, newRow, newCol, captureRow, captureCol) {
    if (
        isValidSquare(newRow, newCol) &&
        !isOccupied(newRow, newCol) &&
        isOccupiedByOpponent(captureRow, captureCol)
    ) {
        const square = getSquare(newRow, newCol);
        square.classList.add('highlight');
        square.addEventListener('click', movePiece);
    }
}

// Função para mover a peça selecionada
function movePiece(event) {
    const targetSquare = event.target;

    // Verifica se é uma captura
    const captureRow = (parseInt(targetSquare.dataset.row) + parseInt(selectedPiece.parentElement.dataset.row)) / 2;
    const captureCol = (parseInt(targetSquare.dataset.col) + parseInt(selectedPiece.parentElement.dataset.col)) / 2;
    const captureSquare = getSquare(captureRow, captureCol);

    if (isOccupiedByOpponent(captureRow, captureCol)) {
        captureSquare.innerHTML = ''; // Remove a peça capturada
    }

    // Move a peça selecionada para a nova casa
    targetSquare.appendChild(selectedPiece);

    // Limpa os destaques
    clearHighlights();

    // Verifica se a peça virou "dama"
    checkForKing(targetSquare);

    // Alterna o turno
    turn = turn === 'white' ? 'black' : 'white';
    turnInfo.innerText = `Vez das ${turn === 'white' ? 'Brancas' : 'Pretas'}`;
    selectedPiece = null;
}

// Função para verificar se a peça virou "dama"
function checkForKing(square) {
    const row = parseInt(square.dataset.row);
    if (row === 0 || row === 7) {
        selectedPiece.classList.add('king-piece');
    }
}

// Função para verificar se uma casa está ocupada
function isOccupied(row, col) {
    const square = getSquare(row, col);
    return square && square.querySelector('.piece');
}

// Função para verificar se uma casa está ocupada por um oponente
function isOccupiedByOpponent(row, col) {
    const square = getSquare(row, col);
    const piece = square.querySelector('.piece');
    return piece && piece.classList.contains(turn === 'white' ? 'black-piece' : 'white-piece');
}

// Função para obter uma casa específica do tabuleiro
function getSquare(row, col) {
    return document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`);
}

// Função para verificar se a casa está dentro dos limites
function isValidSquare(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
}

// Função para limpar os destaques das casas
function clearHighlights() {
    document.querySelectorAll('.highlight').forEach(square => {
        square.classList.remove('highlight');
        square.removeEventListener('click', movePiece);
    });
}

// Função para reiniciar o jogo
restartBtn.addEventListener('click', () => {
    turn = 'white';
    turnInfo.innerText = 'Vez das Brancas';
    selectedPiece = null;
    createBoard();
});

// Inicializa o jogo
createBoard();
