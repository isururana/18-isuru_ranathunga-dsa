import AVLNode from "./AVLNode";

class AVLTree
{
    public root:AVLNode | null;
    private nodeCount:number = 0;

    constructor()
    {
        this.root = null;
    }

    public getNodeCount():number
    {
        return this.nodeCount;
    }

    public getHeight(node:AVLNode|null):number
    {
        return node? node.height:0;
    }

    private updateHeight(node:AVLNode): void
    {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    private getBalanceFactor(node:AVLNode):number
    {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    public insert(key:number):void
    {
        this.root = this.insertData(this.root, key);
    }

    public insertData(node:AVLNode|null, key:number):AVLNode
    {
        //Insertion Logic
        if (node === null)
        {
            this.nodeCount++;
            return new AVLNode(key);
        }
        else if (key < node.key)
        {
            node.left = this.insertData(node.left, key);
        }
        else if (key > node.key)
        {
            node.right = this.insertData(node.right, key);
        }
        else
        {
            return node;
        }

        this.updateHeight(node); //get Height of the tree

        //Balance logic
        let balance:number = this.getBalanceFactor(node);

        if (balance > 1) // if left heavy tree
        {
            //handling LL and LR rotations
            let selection = node.left as AVLNode;
            if (key < selection.key)
            {
                //LL rotation
                return this.rightRotate(node); 
            }
            else
            {
                //LR rotation
                node.left = this.leftRotate(node.left as AVLNode)
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) //if right heavy tree
        {
            //handling RR and RL rotations
            let selection = node.right as AVLNode;
            if (key < selection.key)
            {
                //LL rotation
                return this.leftRotate(node); 
            }
            else
            {
                //LR rotation
                node.right = this.rightRotate(node.left as AVLNode)
                return this.leftRotate(node);
            }
        }
        return node;
    }

    private rightRotate(node:AVLNode):AVLNode
    {
        let x:AVLNode = node.left as AVLNode;
        let y:AVLNode = node.right as AVLNode;

        //Swapping values
        x.right = node;
        node.left = y;

        this.updateHeight(node);
        this.updateHeight(x);

        return x;
    }

    private leftRotate(node:AVLNode):AVLNode
    {
        let x:AVLNode = node.right as AVLNode;
        let y:AVLNode = node.left as AVLNode;

        //Swapping values
        x.right = node;
        node.left = y;

        this.updateHeight(node);
        this.updateHeight(x);

        return x;
    }

    public inOrderTraversal(node:AVLNode|null):void
    {
        if (node)
        {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }

    public search(node:AVLNode|null, key:number): boolean
    {
        if (node)
        {
            this.search(node.left, key);
            if (node.key === key as number)
            {
                return true;
            }
            else
            {
                this.search(node.right, key);
            }
        }
        return false;
    }

    public delete(node:AVLNode|null, key:number):void
    {
        if (this.search(node,key))
        {
            
        }
    }
}
export default AVLTree;