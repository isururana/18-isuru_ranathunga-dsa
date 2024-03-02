import AVLTree from "./AVLTree";
import Student from "./Student";

let AVLTreeObj = new AVLTree();

AVLTreeObj.insert(45);
AVLTreeObj.insert(35);
AVLTreeObj.insert(10);
AVLTreeObj.insert(15);
AVLTreeObj.insert(97);

AVLTreeObj.inOrderTraversal(AVLTreeObj.root);

console.log( "Tree height: "+ AVLTreeObj.getHeight(AVLTreeObj.root));

console.log( "Tree node count: "+ AVLTreeObj.getNodeCount());

console.log(AVLTreeObj.search(AVLTreeObj.root,5));
console.log(AVLTreeObj.search(AVLTreeObj.root,35));


