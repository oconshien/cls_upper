#pragma strict

function OnTriggerEnter (col : Collider)
{
    if(col.gameObject.name == "collide_up")
    {
        Application.LoadLevel ("hallway");
    }
        
    if(col.gameObject.name == "collide_down")
    {
        Application.LoadLevel ("1");
    }
    
    if(col.gameObject.name == "elevup")
    {
        Application.LoadLevel ("hallway_elev");
    }
    
    if(col.gameObject.name == "elevup-elev")
    {
        Application.LoadLevel ("hallway_elev");
    }
    
    if(col.gameObject.name == "elevlow")
    {
        Application.LoadLevel ("1_elev");
    }
    
    if(col.gameObject.name == "elevlow-elev")
    {
        Application.LoadLevel ("1_elev");
    }
    
    if(col.gameObject.name == "portal_up-down")
    {
        Application.LoadLevel ("hallway_back");
    }
    
    if(col.gameObject.name == "portal_down-up")
    {
        Application.LoadLevel ("3");
    }
    
    
}