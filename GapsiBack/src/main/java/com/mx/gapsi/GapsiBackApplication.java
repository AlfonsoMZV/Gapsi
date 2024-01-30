package com.mx.gapsi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;
import graphql.scalars.ExtendedScalars;

@SpringBootApplication
public class GapsiBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(GapsiBackApplication.class, args);
	}
	 @Bean
	 public RuntimeWiringConfigurer runtimeWiringConfigurer() {
	  return wiringBuilder -> wiringBuilder.scalar(ExtendedScalars.UUID);
	 }
}
