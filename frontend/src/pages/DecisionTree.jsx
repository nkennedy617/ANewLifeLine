import React from "react";
import ReactDOM from "react-dom";
import mitchTree from "d3-mitch-tree";
import "./d3-mitch-tree.min.css";
// due to name length restriction, I rename the actual theme css file
import "./d3-mitch-tree-theme-def.min.css";
import "../style/decisiontree.style.css";

//import "./styles.css";

// this works too
//var mitchTree = require("d3-mitch-tree")

export default class DecisionTree extends React.Component {
    constructor(props) {
        super(props);
        this.treePlugin = null;
        //this.elRef = React.createRef()
        this.elRef = null;

        // flat data
        // format data diagram
        this.data = [
            {
                id: 1,
               //name: "1",
                type: "Root",
                description: "Have you completed Paradigm Shift?"
            },
            {
                id: 2,
                parentId: 1,
                name: "Yes",
                type: "",
                description: "Great!"

            },
            {
                id: 3,
                parentId: 1,
                name: "No",
                type: "",
                description: "Complete right now!"
            },
            {
                id: 4,
                parentId: 2,
                //name: "",
                type: "",
                description: "Do you need Skill Training?"
            },
            {
                id: 5,
                parentId: 4,
                name: "No",
                type: "",
                description: "Ok, let's continue!"
            },
            {
                id: 6,
                parentId: 4,
                name: "Yes",
                type: "",
                description: "Train your skills right now!"
            },
            {
                id: 7,
                parentId: 5,
          //      name: "No",
                type: "",
                description: "Do you need help with Job Placement?"
            },
            {
                id: 8,
                parentId: 7,
                name: "Yes",
                type: "",
                description: "Great! Which Job Placement tool would you like to use?"
            },
            {
                id: 9,
                parentId: 7,
                name: "No",
                type: "",
                description: "Good!"
            },
            {
                id: 10,
                parentId: 8,
                name: "Resume Builder",
                type: "",
                description: "Fill a form and automatically generate a resume"
            },
            {
                id: 11,
                parentId: 8,
                name: "Skills matching",
                type: "",
                description: "Need another job? Check out our suggestions!"
            },
            {
                id: 12,
                parentId: 9,
               // name: "Skills matching",
                type: "",
                description: "Do you want to start your own business?"
            },
            {
                id: 13,
                parentId: 12,
                name: "Yes",
                type: "",
                description: "Complete our Entrepreneurship Training"
            },
            {
                id: 14,
                parentId: 12,
                name: "No",
                type: "",
                description: "Congratulations! You're all set!"
            }

        ];
    }

    componentDidMount() {
        this.createTree();
    }

    componentDidUpdate() {}

    createTree = () => {
        this.treePlugin = new mitchTree.boxedTree()
            .setIsFlatData(true)
            .setData(this.data)
            .setElement(this.elRef)
            .setIdAccessor(function(data) {
                return data.id;
            })
            .setParentIdAccessor(function(data) {
                return data.parentId;
            })
            .setBodyDisplayTextAccessor(function(data) {
                return data.description;
            })
            .setTitleDisplayTextAccessor(function(data) {
                return data.name;
            });
        /*if (!(this.props.orientation == undefined || this.props.orientation == null)) {
                this.treePlugin.setOrientation(this.props.orientation)
            }*/
        this.treePlugin
            .setMargins({
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            })
            .initialize();

        // Expand all nodes
        let nodes = this.treePlugin.getNodes();
        nodes.forEach((node, index, arr) => this.treePlugin.expand(node));
        this.treePlugin.update(this.treePlugin.getRoot());

    };

    render() {
        return <div ref={el => (this.elRef = el)} />;
    }
}