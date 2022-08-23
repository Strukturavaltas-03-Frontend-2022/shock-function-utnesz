const checkMember = async (path, memberName) => {
    let member = null;
    
    try {
        member = await import(path).then( f => 
            f[memberName] );
    } catch(e)  {}

    return member;
};

export { 
    checkMember 
}