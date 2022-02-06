exports.sum = (a, b) => {
    let anum = Number.parseInt(a);
    let bnum = Number.parseInt(b);
    if (Number.isNaN(anum)) return "invalid a";
    if (Number.isNaN(bnum)) return "invalid b";
    return (anum + bnum) + "";
};