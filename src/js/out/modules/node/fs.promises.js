var D=Bun.fs(),B="::bunternal::",E={[B]:(S)=>{var b={[B]:function(C,J,q){var z;try{z=S.apply(D,q),q=void 0}catch(A){q=void 0,J(A);return}C(z)}}[B];return async function(...C){return await new Promise((J,q)=>{process.nextTick(b,J,q,C)})}}}[B],G=E(D.accessSync),H=E(D.appendFileSync),I=E(D.closeSync),K=E(D.copyFileSync),L=E(D.existsSync),M=E(D.chownSync),N=E(D.chmodSync),O=E(D.fchmodSync),P=E(D.fchownSync),Q=E(D.fstatSync),R=E(D.fsyncSync),T=E(D.ftruncateSync),U=E(D.futimesSync),V=E(D.lchmodSync),W=E(D.lchownSync),X=E(D.linkSync),Y=E(D.lstatSync),Z=E(D.mkdirSync),_=E(D.mkdtempSync),$=E(D.openSync),x=E(D.readSync),j=E(D.writeSync),v=E(D.readdirSync),w=E(D.readFileSync),k=E(D.writeFileSync),F=E(D.readlinkSync),h=E(D.realpathSync),g=E(D.renameSync),u=E(D.statSync),d=E(D.symlinkSync),n=E(D.truncateSync),l=E(D.unlinkSync),a=E(D.utimesSync),c=E(D.lutimesSync),t=E(D.rmSync),y=E(D.rmdirSync),p={access:G,appendFile:H,close:I,copyFile:K,exists:L,chown:M,chmod:N,fchmod:O,fchown:P,fstat:Q,fsync:R,ftruncate:T,futimes:U,lchmod:V,lchown:W,link:X,lstat:Y,mkdir:Z,mkdtemp:_,open:$,read:x,write:j,readdir:v,readFile:w,writeFile:k,readlink:F,realpath:h,rename:g,stat:u,symlink:d,truncate:n,unlink:l,utimes:a,lutimes:c,rm:t,rmdir:y,constants,[Symbol.for("CommonJS")]:0};export{k as writeFile,j as write,a as utimes,l as unlink,n as truncate,d as symlink,u as stat,y as rmdir,t as rm,g as rename,h as realpath,F as readlink,v as readdir,w as readFile,x as read,$ as open,_ as mkdtemp,Z as mkdir,c as lutimes,Y as lstat,X as link,W as lchown,V as lchmod,U as futimes,T as ftruncate,R as fsync,Q as fstat,P as fchown,O as fchmod,L as exists,p as default,K as copyFile,I as close,M as chown,N as chmod,H as appendFile,G as access};