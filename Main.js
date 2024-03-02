"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AVLTree_1 = __importDefault(require("./AVLTree"));
let AVLTreeObj = new AVLTree_1.default();
AVLTreeObj.insert(45);
AVLTreeObj.insert(35);
AVLTreeObj.insert(10);
AVLTreeObj.insert(15);
AVLTreeObj.insert(97);
AVLTreeObj.inOrderTraversal(AVLTreeObj.root);
console.log("Tree height: " + AVLTreeObj.getHeight(AVLTreeObj.root));
console.log("Tree node count: " + AVLTreeObj.getNodeCount());
console.log(AVLTreeObj.search(AVLTreeObj.root, 5));
console.log(AVLTreeObj.search(AVLTreeObj.root, 35));
