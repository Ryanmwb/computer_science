class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree2{
    constructor(){
        this.root = null;
    }
    addNode(node, root){
        if(root == null){
            return this.root = node;
        }
        if(root.right == null && root.data < node.data){
            return root.right = node;
        }
        if(root.left == null && root.data > node.data){
            return root.left = node;
        }
        if(node.data > root.data){
            this.addNode(node, root.right);
        }
        if(node.data < root.data){
            this.addNode(node, root.left);
        }
    }
    /*findValue(value, root){
        if(value == root.data){
            console.log("value exists")
            return "Value exists in tree"
        }
        if(value > root.data && root.right == null){
            console.log("value does NOT exist")
            return "Value does NOT exist in tree"
        } 
        if(value < root.data && root.left == null){
            console.log("value does NOT exist")
            return "Value does NOT exist in tree"
        } 
        if(value > root.data){
            this.findValue(value, root.right)
        }
        if(value < root.data){
            this.findValue(value, root.left)
        }
    }*/
    //when finding common ancestor lower node argument is before higher node argument.  This decides which is which.
    //call on the find common ancestor right from the below function.  
    findLowerHigher(node1, node2){
        console.log("ONE.....findLowerHigher being called...")
        if(node1.data > node2.data){
            console.log("node1 > node2")
            //findCommonAncestor(root, node1, node2);
            this.findCommonAncestor(this.root, node2, node1)
        } else {
            console.log("node2 > node1")
            //findCommonAncestor(root, node2, node1);
            this.findCommonAncestor(this.root, node1, node2)
        }
    }
    // 1)findLowerHigher 2)findCommonAncestor 3) countDistance
    findCommonAncestor(lowestCommonAncestor, lowerNode, higherNode){
        console.log("TWO.....findCommonAncestor being called...")
        if(lowerNode.data === lowestCommonAncestor.data || higherNode.data === lowestCommonAncestor.data){
            console.log("LCA is.... ")
            console.log(lowestCommonAncestor)
            this.distanceBetweenNodes(lowestCommonAncestor.left, lowerNode, higherNode)
        }else if (lowerNode.data < lowestCommonAncestor.data && higherNode.data > lowestCommonAncestor.data){
            console.log("LCA is.... ")
            console.log(lowestCommonAncestor)
            this.distanceBetweenNodes(lowestCommonAncestor.left, lowerNode, higherNode)
        }else if (lowerNode.data < lowestCommonAncestor.data && higherNode.data < lowestCommonAncestor.data){
            this.findCommonAncestor(lowestCommonAncestor.left, lowerNode, higherNode)
        }else if (lowerNode.data > lowestCommonAncestor.data && higherNode.data > lowestCommonAncestor.data){
            this.findCommonAncestor(lowestCommonAncestor.right, lowerNode, higherNode)
        }
    }
    distanceBetweenNodes(lowestCommonAncestor, lowerNode, higherNode){
        console.log("THREE.....distanceBetweenNodes being called...")

        var lowerCount = this.countDistance(lowestCommonAncestor, lowerNode, 0);
        var higherCount = this.countDistance(lowestCommonAncestor, higherNode, 0);

        var total = lowerCount + higherCount;
        console.log("total iss.....")
        console.log(total)
        return total;
    }
    countDistance(lca, node, count){
        console.log("FOUR....... countDistance being called....")
        console.log("count is..."+count)
        console.log("lca is...."+lca.data)
        if(lca.data == node.data){
            return count
        } else if(node.data > lca.data){
            this.countDistance(lca.right, node, count+1)
        } else if(node.data < lca.data){
            this.countDistance(lca.left, node, count+1)
        }
    }
}

var tree = new BinaryTree2;

var node1 = new Node(32);
var node2 = new Node(1000);
var node3 = new Node(50);
var node4 = new Node(1001);
var node5 = new Node(75);
var node6 = new Node(12);
var node7 = new Node(22);
var node8 = new Node(27);
var node9 = new Node(28);
var node10 = new Node(25);
var node11 = new Node(11);
var node12 = new Node(7);
var node13 = new Node(9);

tree.addNode(node1, tree.root)
tree.addNode(node2, tree.root)
tree.addNode(node3, tree.root)
tree.addNode(node4, tree.root)
tree.addNode(node5, tree.root)
tree.addNode(node6, tree.root)
tree.addNode(node7, tree.root)
tree.addNode(node8, tree.root)
tree.addNode(node9, tree.root)
tree.addNode(node10, tree.root)
tree.addNode(node11, tree.root)
tree.addNode(node12, tree.root)
tree.addNode(node13, tree.root)

//tree.findValue(9, tree.root);//should log "value exists"
console.log(tree.root.left.left.left.right); //should log "9"
tree.findLowerHigher(node11, node9)// should log "node2 > node1"