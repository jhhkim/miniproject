package com.project.irang_map.web;

import com.project.irang_map.service.KidsmapService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class SearchController {
    @PostMapping("/search")
    public String serch(@RequestParam(value = "juso") String juso){
        return "입력한 주소는?" + juso; //입력한 값 확인용
        //kidsmapService.searchAll(); 이런걸로 리턴해야할것같은데
    }
}
