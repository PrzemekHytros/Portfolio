//in  Pre-request Script


let boardNumber = pm.collectionVariables.get('boardNumber');

if(isNaN(boardNumber)) {
   boardNumber = 0;
}  
    
boardNumber ++
pm.collectionVariables.set('boardNumber', boardNumber);