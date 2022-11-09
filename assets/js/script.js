// location.href = "http://vadgamachetan.com/shopdot/signin/sign-in.html";
const bcrypt = dcodeIO.bcrypt;

/** One way, can't decrypt but can compare */
const salt = bcrypt.genSaltSync(10);

 window.onload = function () {
     isLoggedIn()
 }



const runEncryption = () => {
    bcrypt.hash('Work@Shopdot#123', salt, (err, res) => {
        document.cookie = `theme=${res}; path=/`
    });
}


const isLoggedIn = async () => {
    const userToken = sessionStorage.getItem('shopdotAdmin');
    if (userToken) {
        const data = JSON.parse(userToken);
        const result = await compare(data.pass);
        if (!result) {
            sessionStorage.clear()
            location.href = "http://vadgamachetan.com/shopdot/signin/sign-in.html";
        }
    } else {
        sessionStorage.clear()
        location.href = "http://vadgamachetan.com/shopdot/signin/sign-in.html";
    }

}

/** Compare stored password with new encrypted password */
async function compare(encrypted) {
    const res = await bcrypt.compare('Work@Shopdot#123', encrypted);
    return res
}

//isLoggedIn()