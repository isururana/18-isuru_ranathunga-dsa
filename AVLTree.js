"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AVLNode_1 = __importDefault(require("./AVLNode"));
class AVLTree {
    root;
    nodeCount = 0;
    constructor() {
        this.root = null;
    }
    getNodeCount() {
        return this.nodeCount;
    }
    getHeight(node) {
        return node ? node.height : 0;
    }
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    insert(key) {
        this.root = this.insertData(this.root, key);
    }
    insertData(node, key) {
        //Insertion Logic
        if (node === null) {
            this.nodeCount++;
            return new AVLNode_1.default(key);
        }
        else if (key < node.key) {
            node.left = this.insertData(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
        }
        else {
            return node;
        }
        this.updateHeight(node); //get Height of the tree
        //Balance logic
        let balance = this.getBalanceFactor(node);
        if (balance > 1) // if left heavy tree
         {
            //handling LL and LR rotations
            let selection = node.left;
            if (key < selection.key) {
                //LL rotation
                return this.rightRotate(node);
            }
            else {
                //LR rotation
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) //if right heavy tree
         {
            //handling RR and RL rotations
            let selection = node.right;
            if (key < selection.key) {
                //LL rotation
                return this.leftRotate(node);
            }
            else {
                //LR rotation
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    rightRotate(node) {
        let x = node.left;
        let y = node.right;
        //Swapping values
        x.right = node;
        node.left = y;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    leftRotate(node) {
        let x = node.right;
        let y = node.left;
        //Swapping values
        x.right = node;
        node.left = y;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
    search(node, key) {
        if (node) {
            this.search(node.left, key);
            if (node.key === key) {
                return true;
            }
            else {
                this.search(node.right, key);
            }
        }
        return false;
    }
    delete(node, key) {
        if (this.search(node, key)) {
        }
    }
}
exports.default = AVLTree;
