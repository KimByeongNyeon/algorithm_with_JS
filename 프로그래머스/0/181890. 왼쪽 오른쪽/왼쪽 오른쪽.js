function solution(str_list) {
    const lidx = str_list.indexOf("l");
    const ridx = str_list.indexOf("r");

    if (lidx === -1 && ridx === -1) {
        return [];
    }

    if (lidx !== -1 && (ridx === -1 || lidx < ridx)) {
        return str_list.slice(0, lidx);
    } else if (ridx !== -1) {
        return str_list.slice(ridx + 1);
    }

    return [];
}
