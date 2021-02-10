class Cliente{
    constructor(nome, cpf){
      this.nome = nome
      this.cpf = cpf
    }
  
    validarCPF(){
      var soma;
      var resto;
      soma = 0;
  
      this.cpf = this.cpf.replace(/(\.)|(\-)/g, "");
  
      if (this.cpf.length > 11) return false;
      if (this.cpf.length < 11) return false;
      if (this.cpf == "00000000000") return false;
      if (this.cpf == "11111111111") return false;
      if (this.cpf == "22222222222") return false;
      if (this.cpf == "33333333333") return false;
      if (this.cpf == "44444444444") return false;
      if (this.cpf == "55555555555") return false;
      if (this.cpf == "66666666666") return false;
      if (this.cpf == "77777777777") return false;
      if (this.cpf == "88888888888") return false;
      if (this.cpf == "99999999999") return false;
  
      for (var i=1; i<=9; i++) soma = soma + parseInt(this.cpf.substring(i-1, i)) * (11 - i);
      resto = (soma * 10) % 11;
  
      if ((resto == 10) || (resto == 11))  resto = 0;
      if (resto != parseInt(this.cpf.substring(9, 10)) ) return false;
  
      soma = 0;
      for (var i = 1; i <= 10; i++) soma = soma + parseInt(this.cpf.substring(i-1, i)) * (12 - i);
      resto = (soma * 10) % 11;
  
      if ((resto == 10) || (resto == 11))  resto = 0;
      if (resto != parseInt(this.cpf.substring(10, 11) ) ) return false;
    
      return true;
    }
  }
  
  module.exports = Cliente
  ------------------------------------------
  
  const Cliente = require("../models/cliente")
  
  test('Ao digitar um CPF válido para um cliente, o mesmo precisa retornar verdadeiro', () => {
    var cliente = new Cliente("Danilo", "384.960.460-87")
    expect(cliente.validarCPF()).toBe(true);
  });
  
  test('Ao digitar um CPF válido sem pontos para um cliente, o mesmo precisa retornar verdadeiro', () => {
    var cliente = new Cliente("Danilo", "38496046087")
    expect(cliente.validarCPF()).toBe(true);
  });
  
  test('Ao digitar um CPF inválido sem pontos para um cliente, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "38496046047")
    expect(cliente.validarCPF()).toBe(false);
  });
  
  test('Ao digitar um CPF 00000000000, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "00000000000")
    expect(cliente.validarCPF()).toBe(false);
  });
  
  test('Ao digitar um CPF 000000000000, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "000000000000")
    expect(cliente.validarCPF()).toBe(false);
  });
  
  test('Ao digitar um CPF 11111111111, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "11111111111")
    expect(cliente.validarCPF()).toBe(false);
  });