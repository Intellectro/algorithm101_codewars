//* url "https://localhost.com.ng" returns "localhost";
//* url "http://localhost.com.ng" returns "localhost";
//* url "www.localhost.com.ng.ru" returns "localhost";

const getDomainName = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return url.split(".")[url.split(".").indexOf("www") + 1];
    }
    const _url = new URL(url).hostname;
    if (_url.startsWith("www")) {
        return _url.split(".")[_url.split(".").indexOf("www") + 1];
    }
    return _url.split(".")[0];
}

const _name = getDomainName("https://www.xakep.ru");