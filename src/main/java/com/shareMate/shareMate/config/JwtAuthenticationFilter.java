package com.shareMate.shareMate.config;

import antlr.Token;
import com.shareMate.shareMate.jwt.TokenHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.IOException;
import java.util.*;

@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends GenericFilterBean {
    private final CustomUserDetailsService userDetailsService;


    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = String.valueOf(extractToken(request));
        System.out.println("token : " + token);

        extractToken(request).map(userDetailsService::loadUserByUsername).ifPresent(this::setAuthentication);
        //CustomUserDetails userId = userDetailsService.loadUserByUsername(String.valueOf(extractToken(request)));
        if(Optional.ofNullable(((HttpServletRequest) request).getHeader("Authorization")).isPresent()){
            System.out.println("토큰 저장한다  필터에서");
            System.out.println(userDetailsService.loadUserByUsername(extractToken(request).get()).getUserId());
            request.setAttribute("userid",userDetailsService.loadUserByUsername(extractToken(request).get()).getUserId());

        }


        //RequestWrapper requests= new RequestWrapper((HttpServletRequest) request);

        System.out.println("set");
        chain.doFilter(request, response);
    }

    private void setAuthentication(CustomUserDetails userDetails) {
        System.out.println(userDetails.getUsername());
        SecurityContextHolder.getContext().setAuthentication(new CustomAuthenticationToken(userDetails, userDetails.getAuthorities()));
    }

    private Optional<String> extractToken(ServletRequest request) {
        return Optional.ofNullable(((HttpServletRequest) request).getHeader("Authorization"));
    }
    private static class RequestWrapper extends HttpServletRequestWrapper {
        private HashMap<String ,Object > params;
        public RequestWrapper(HttpServletRequest request) {
            super(request);
            this.params= new HashMap<String,Object>(request.getParameterMap());
        }

        @Override
        public String[] getParameterValues(String parameter) {
            String values[] = super.getParameterValues(parameter); // 전달받은 parameter 불러오기


            if(values == null) {
                return null;
            }

            return values;
        }
        @SuppressWarnings("unchecked")
        public Map getParameterMap() {
            return Collections.unmodifiableMap(params);
        }

        @SuppressWarnings("unchecked")
        public Enumeration getParameterNames() {
            return Collections.enumeration(params.keySet());
        }
        public void setParameter(String name ,String value) {
            String[] oneParam ={value} ;
            setParameter(name, oneParam);
        }

        public void setParameter(String name, String[] value ){
            params.put(name,value);
        }



    }


}
