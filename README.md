# ag-grid-customised-row-specific-action-buttons
Custom row specific action buttons in ag-grid

The functionality provided here doesn't come with ag-grid community version, hence it has been 
represented how to implement such a feature.

The piece of code here shows how to implement and is not a complete project, necessary components have been provided.

Whenever a new button functionality has to be added to each row specific in a grid(defined in sample.component.ts), we need to add a variable in cell renderer component(here: action-items-grid-row-renderer.component.ts) and define the same in the parent file being used(here: sample.component.ts).

Advantages of this way of implementation:
* As ag-grid doesnt support multiple cell renderes in a single column, this is one way to implement set of button features in a single grid.

Disadvantages of the present implementation, but solution to it is not yet updated here:
* Will have to go and edit the action-renderer component whenever a new type of button functionality not supported has to be implemented

Solution for the above mentioned Disadvantage:
* Create individual child components for each button fucntionality and inject them in action renderer component. Which in turn becomes a vendor, to supply set of button functionalities to the subscriber.
  

Feel free to let me know about other ways to handle the same.
