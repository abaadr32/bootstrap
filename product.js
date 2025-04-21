var items = 0;
$(document).ready(function () {

    //on click listener
    

   //$("#btn_delete").click(function () {
     //  deleteProduct();
    //});
    
    //Onclick listener for the class
    $(document).on("click",".btn-del",function(){
      deleteProduct(this);
    });

    $(document).on("click",".btn-edit",function(){
      editProduct(this);
    });
  
  //on submit listener 
  $("#frm_new_product").submit(function(e){
    e.preventDefault();
    registerProduct();
  });

  $("#frm_edit_product").submit(function(e){
    e.preventDefault();
    savechanges();
  });
  

});

function editProduct(btn) {
  let name = $(btn).attr("data-name");
  let desc = $(btn).attr("data-desc");
  let price = $(btn).attr("data-price");
  let url = $(btn).attr("data-url");
  let counter = $(btn).attr("data-id");

  $("#edit_product").val(name);
  $("#edit_Desc").val(desc);
  $("#edit_price").val(price);
  $("#edit_img").val(url);
  $("#edit_counter").val(counter);


  $("#editProductmodal").modal("show");
}


function registerProduct() {
    items++;
    //alert("Register");
    let prProduct = $("#inp_product").val();
    let prDescription = $("#inp_Desc").val();
    let prPrice = $("#inp_price").val();
    let prImage = $("#inp_img").val();

    //alert("Product name is: " + prProduct+ " and the price is $"+prPrice);
    let html = "";
    html += "<tr id='tr_"+items+"'>";
    html += "<td>"+items+"</td>";
    html += "<td><img src='"+prImage+"' width='50px'/> </td>";
    html += "<td>"+prProduct+"<br><small>"+prDescription+"</small></td>";
    html += "<td>$"+prPrice+"</td>";
    html += "<td>";
    html += '<div class="btn-group" role="group">';
    html += '<button id="btn_edit" data-id='+items+' data-name="'+prProduct+'" data-desc="'+prDescription+'" data-price="'+prPrice+'" data-url="'+prImage+'" class="btn btn-outline-primary btn-edit">Edit</button>';
    html += '<button data-id='+items+' class="btn btn-outline-danger btn-del">Delete</button>';
    html += "</div>";
    html += "</td>";
    
    
    html += "</tr>";

    $("#tbody_products").append(html);

    $("#Mymodal").modal("hide");


}

function deleteProduct(btn) {
/*
  $.confirm({
    animation: 'zoom',
    closeAnimation: 'scale'
  });
  */
  let id = $(btn).attr("data-id");
  $("#tr_"+id).fadeOut("slow");

}

function savechanges(){

  let prProduct = $("#edit_product").val();
  let prDescription = $("#edit_Desc").val();
  let prPrice = $("#edit_price").val();
  let prImage = $("#edit_img").val();
  let counter = $("#edit_counter").val();

  
  $("#tr_"+counter).html("");
  let html = "";

    html += "<td>"+counter+"</td>";
    html += "<td><img src='"+prImage+"' width='50px'/> </td>";
    html += "<td>"+prProduct+"<br><small>"+prDescription+"</small></td>";
    html += "<td>$"+prPrice+"</td>";
    html += "<td>";
    html += '<div class="btn-group" role="group">';
    html += '<button id="btn_edit" data-id='+counter+' data-name="'+prProduct+'" data-desc="'+prDescription+'" data-price="'+prPrice+'" data-url="'+prImage+'" class="btn btn-outline-primary btn-edit">Edit</button>';
    html += '<button data-id='+counter+' class="btn btn-outline-danger btn-del">Delete</button>';
    html += "</div>";
    html += "</td>";


  $("#tr_"+counter).html(html);

  $("#editProductmodal").modal("hide");
}