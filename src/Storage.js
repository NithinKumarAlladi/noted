const myStorage = window.localStorage;

function addItem(key,value){
    key = JSON.stringify(key);
    value = JSON.stringify(value);
    if(key !== '' && value !== 'null'){
        myStorage.setItem(key, value)
    }
}

function viewItem(key){
    key = JSON.stringify(key);
    const value = 'null';
    if(key !== ''){
        value = myStorage.getItem(key);
    }
    return value;
}