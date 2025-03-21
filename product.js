$(document).ready(function(){
    // //ON CLICK LISTENER
    $("#btn_edit").click(function(){
        startpage();
    });

    // $("#btn_delete").click(function(){
    //     deleteproduct();
    // });

    //onclick listener for class
    $(document).on("click",".btn-del",function(){
        deleteproduct();
    });


    //ON SUBMIT LISTENER
    $("#frm_new_product").submit(function(e){
        e.preventDefault();
        registerProduct();
    });
});

function startpage(){
    alert("Page has started");
}


function registerProduct(){
    let prName = $("#inp_product").val();
    let prDesc = $("#inp_desc").val();
    let prPrice = $("#inp_price").val();
    let prImg = $("#inp_img").val();

    // alert("Product name is: "+prName+" and the price is $"+prPrice)
    let html = "";
    html += "<tr>";
    html += "<td>2</td>";
    html += "<td> <img src='"+prImg+"' width = '50'px/> </td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "</tr>";

    $("#tbody_products").append(html);

    $("#mymodal").modal("hide");
}

function deleteproduct(){
    $.confirm({
        theme: 'supervan' 
    });
}

