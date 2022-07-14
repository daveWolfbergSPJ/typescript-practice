const beforeLoad = "beforeLoad"
const loading = "loading"
const loaded = "loaded"

enum LoadingState {
beforeLoad = "beforeLoad",
loading = "loading",
loaded = "loaded",
}

const englishLoadingStates = {
    [LoadingState.beforeLoad]: "Before Load"
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeLoad))

// literal types 

function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0; 
    for(let i = 0; i < dice; i++) {
        pip += (Math.floor(Math.random() * 5)) + 1
    }
    return pip
}

console.log(rollDice(3))

function sendEvnt(name: "addToCart", data: { productId: number}): void;
function sendEvnt(name: "checkout", data: {cartCount: number}): void;
function sendEvnt(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvnt("addToCart", {productId: 123123})