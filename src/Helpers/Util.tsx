export function numberWithCommas(x:any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(1);
}