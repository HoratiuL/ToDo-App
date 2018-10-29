class System {
  constructor() {
    this.head = new Header("ToDo");
    this.name = new Name("Name");
    this.desc = new Description("Description");
    this.time = new Until("Until");
    this.list = new ShopList("Shop List");
    this.add = new AddButton(this.name, this.desc, this.time, this.list);
    this.cancel = new CancelButton(this.name, this.desc, this.time);
  }
  initialize() {
    this.head.render();
    this.name.render();
    this.desc.render();
    this.time.render();
    this.add.render();
    this.cancel.render();
    this.list.render();
  }
}

class Header {
  constructor(title) {
    this.head = title;
  }

  render() {
    var h1 = document.createElement("h1");
    h1.innerText = this.head;
    document.getElementById("system").appendChild(h1);
  }
}

class Name {
  constructor(item) {
    this.name = item;
  }

  render() {
    var p1 = document.createElement("p1");
    p1.innerText = this.name;
    document.getElementById("system").appendChild(p1);
    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    document.getElementById("system").appendChild(this.input);

    document.getElementById("system").style.width = "49%";
    document.getElementById("system").style.border = "2px solid limegreen";
    document.getElementById("system").style.padding = "25px";
  }

  getValue() {
    return this.input.value;
  }

  setValidity(valid) {
    if (valid) {
      this.input.style.removeProperty("border");
    } else {
      this.input.style.border = "2px solid red";
    }
  }

  reset() {
    this.input.value = "";
    this.setValidity(true);
  }
}

class Description {
  constructor(text) {
    this.desc = text;
  }

  render() {
    var p2 = document.createElement("p2");
    p2.innerText = this.desc;
    document.getElementById("system").appendChild(p2);
    this.textarea = document.createElement("textarea");
    this.textarea.setAttribute("type", "textarea");
    document.getElementById("system").appendChild(this.textarea);
  }

  getValue() {
    return this.textarea.value;
  }

  setValidity(valid) {
    if (valid) {
      this.textarea.style.removeProperty("border");
    } else {
      this.textarea.style.border = "2px solid red";
    }
  }

  reset() {
    this.textarea.value = "";
    this.setValidity(true);
  }
}

class Until {
  constructor(date) {
    this.time = date;
  }

  render() {
    var p3 = document.createElement("p3");
    p3.innerText = this.time;
    document.getElementById("system").appendChild(p3);
    this.input2 = document.createElement("input");
    this.input2.setAttribute("type", "date");
    document.getElementById("system").appendChild(this.input2);
  }

  getValue() {
    return this.input2.value;
  }

  setValidity(valid) {
    if (valid) {
      this.input2.style.removeProperty("border");
    } else {
      this.input2.style.border = "2px solid red";
    }
  }

  reset() {
    this.input2.value = "";
    this.setValidity(true);
  }
}

class AddButton {
  constructor(name, desc, until, list) {
    this.name = name;
    this.desc = desc;
    this.until = until;
    this.list = list;
  }

  onclick() {
    this.list.add(
      this.name.getValue(),
      this.desc.getValue(),
      this.until.getValue()
    );

    var value = this.name.getValue();
    this.name.setValidity(value != "");
    // this.list.add(this.name.getValue());
    console.log(value);

    var value = this.desc.getValue();
    this.desc.setValidity(value != "");
    // this.list.add(this.desc.getValue());
    console.log(value);

    var value = this.until.getValue();
    this.until.setValidity(value != "");
    // this.list.add(this.until.getValue());
    console.log(value);
  }

  render() {
    var button = document.createElement("button");
    var self = this;
    button.onclick = function() {
      self.onclick();
    };
    button.innerText = "Add";
    document.getElementById("system").appendChild(button);
  }
}

class CancelButton {
  constructor(name, desc, until) {
    this.name = name;
    this.desc = desc;
    this.until = until;
  }

  onclick() {
    this.name.reset();
    this.desc.reset();
    this.until.reset();
  }

  render() {
    var button2 = document.createElement("button");
    var self = this;
    button2.onclick = function() {
      self.onclick();
    };
    button2.innerText = "Cancel";
    document.getElementById("system").appendChild(button2);
  }
}

class ShopList {
  constructor(name, desc, until, list) {
    this.list = list;
    this.name = name;
    this.desc = desc;
    this.until = until;
  }

  render() {
    // LINIILE ORIGINALE
    // this.p4 = document.createElement("p");
    // document.getElementById("system").appendChild(this.p4);

    document.getElementById("list1").style.width = "49%";
  }

  add(name, desc, until) {
    // this.p4.innerHTML += name + desc + until + "<br>";

    var bodylist = document.getElementById("list1");
    this.todoline = document.createElement("li");
    bodylist.appendChild(this.todoline);

    this.todoline.innerHTML += name + " / " + desc + " / " + until + "<br>";

    this.todoline.style.width = "50%";
    this.todoline.style.display = "inline-block";
    this.todoline.style.position = "relative";
    this.todoline.style.padding = "5px 0 5px 15px";
    this.todoline.style.height = "auto";
    this.todoline.style.border = "1px solid black";
    this.todoline.style.borderRadius = "10px";

    var myNodelist = document.getElementById("list1");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    this.todoline.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }

    // document.getElementsByClassName("close").style.position = "absolute";

    // this.todoline.innerHTML += desc;
    // this.todoline.innerHTML += until;
  }
}

var system = new System();
system.initialize();
