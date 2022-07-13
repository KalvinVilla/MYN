export const generate_token = (length) => {
        //edit the token allowed characters
        let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
        let b = [];  
        for (var i=0; i<length; i++) {
            var j = (Math.random() * (a.length-1)).toFixed(0);
            b[i] = a[j];
        }
        return b.join("");
}
export const generate_uid = () => {
    var d = new Date().getTime();
    return 'xxxxxx-xxxx-4xxx-yxxx-xxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

